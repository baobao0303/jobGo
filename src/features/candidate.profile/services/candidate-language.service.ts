import { CandidateProfile, CandidateLanguage } from '@prisma/client'
import { candidateProfileService } from './candidate-profile.service'
import prisma from '~/prisma'

class CandidateLanguageService {
  public async create(requestBody: any, currentUser: UserPayload) {
    const { languageName, level } = requestBody

    const candidateProfile: CandidateProfile = await candidateProfileService.readOneByUserId(currentUser.id)
    const candidateLanguage = await prisma.candidateLanguage.create({
      data: {
        candidateProfileId: candidateProfile.id,
        languageName,
        level
      }
    })

    return candidateLanguage
  }

  public async readAll() {
    const candidateLanguage: CandidateLanguage[] = await prisma.candidateLanguage.findMany()

    return candidateLanguage
  }

  public async readMyLanguages(currentUser: UserPayload) {
    const candidateProfile: CandidateProfile = await candidateProfileService.readOneByUserId(currentUser.id)

    const candidateLanguages: CandidateLanguage[] = await prisma.candidateLanguage.findMany({
      where: { candidateProfileId: candidateProfile.id }
    })

    return candidateLanguages
  }
}

export const candidateLanguageService: CandidateLanguageService = new CandidateLanguageService()
