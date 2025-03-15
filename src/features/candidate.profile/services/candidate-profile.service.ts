import { CadidateProfile } from '@prisma/client'
import { NotFoundException } from '~/globals/cores/error.core'
import prisma from '~/prisma'

class CandidateProfileService {
  public async create(requestBody: any, currentUser: UserPayload): Promise<CadidateProfile> {
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

  public async readOne(id: number): Promise<CadidateProfile> {
    const candidates: CadidateProfile | null = await prisma.cadidateProfile.findUnique({
      where: { id }
    })

    if (!candidates) {
      throw new NotFoundException(`Candidate profile with ID:{id} not found`)
    }
    return candidates
  }
}

export const candidateProfileService: CandidateProfileService = new CandidateProfileService()
