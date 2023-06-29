import { TUserCourse } from '@/src/types/user'

export type TCourse = {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title?: string
  description?: string
  duration?: number
  published?: boolean
  deleted?: boolean
  authorId?: string
  levelId?: string
  chapters?: Array<string>
  userCourses?: TUserCourse[]
  technologies?: Array<string>
}
