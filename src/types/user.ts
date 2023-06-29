export type TUser = {
  id: string
  name: string
  lastName: string
}

export type TUserCourse = {
  id?: string
  startedAt?: Date
  userId?: string
  courseId?: string
  lessonId?: string
}
