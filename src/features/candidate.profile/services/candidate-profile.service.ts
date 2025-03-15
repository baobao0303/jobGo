import { CadidateProfile } from '@prisma/client'
import { NotFoundException } from '~/globals/cores/error.core'
import prisma from '~/prisma'
import { ICandidateProfile } from '../interfaces/candidate-profile.interface'

class CandidateProfileService {
  public async create(requestBody: ICandidateProfile, currentUser: UserPayload): Promise<CadidateProfile> {
    const { fullName, gender, phone, cv, birthdate, address } = requestBody

    const candidateProfile = await prisma.cadidateProfile.create({
      data: {
        fullName,
        gender,
        phone,
        cv,
        birthdate: new Date(birthdate),
        address,
        userId: currentUser.id
      }
    })
    return candidateProfile
  }

  public async readAll(): Promise<CadidateProfile[]> {
    const candidates: CadidateProfile[] = await prisma.cadidateProfile.findMany()

    return candidates
  }
  // Only ADMIN or RECRUITER or owner of candidate profile

  public async readOne(id: number): Promise<CadidateProfile> {
    const candidates: CadidateProfile | null = await prisma.cadidateProfile.findUnique({
      where: { id }
    })

    if (!candidates) {
      throw new NotFoundException(`Candidate profile with ID:{id} not found`)
    }
    return candidates
  }

  public async update(id: number, requestBody: ICandidateProfile): Promise<CadidateProfile> {
    const { fullName, gender, phone, cv, birthdate, address } = requestBody

    // 1. Make sure profile with id exits
    await this.readOne(id)

    // 2. Update
    const profileUpdate: CadidateProfile = await prisma.cadidateProfile.update({
      where: { id },
      data: {
        fullName,
        gender,
        phone,
        cv,
        birthdate,
        address
      }
    })

    return profileUpdate
  }

  public async remove(id: number): Promise<void> {
    await this.readOne(id)

    await prisma.cadidateProfile.delete({
      where: { id }
    })
  }
}

export const candidateProfileService: CandidateProfileService = new CandidateProfileService()
