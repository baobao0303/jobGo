import { Application } from 'express'
import candidateLanguageRoute from '~/features/candidate.profile/routes/candidate-languages.route'
import candidateProfileRoute from '~/features/candidate.profile/routes/candidate-profile.routes'
import authRoute from '~/features/user/routes/auth.route'
import userRoute from '~/features/user/routes/user.route'

function appRoutes(app: Application) {
  app.use('/api/v1/users', userRoute)
  app.use('/api/v1/auth', authRoute)
  app.use('/api/v1/candidate-profiles', candidateProfileRoute)
  app.use('/api/v1/candidate-languages', candidateLanguageRoute)
}
export default appRoutes
