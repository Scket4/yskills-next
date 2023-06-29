'user client'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TCourse } from '@/src/types'

const initialStatCourses: TCourse[] = []

export const courses = createSlice({
  name: 'courses',
  initialState: initialStatCourses,
  reducers: {
    setCoursers: (state: TCourse[], action: PayloadAction<TCourse[]>) => {
      state.splice(0, state.length)
      state.push(...action.payload)
    },
  },
})

export const { setCoursers } = courses.actions
export const coursesReduces = courses.reducer

interface ICourseInit {
  value: TCourse
}
const initCourse: ICourseInit = {
  value: {},
}

export const course = createSlice({
  name: 'course',
  initialState: initCourse,
  reducers: {
    setCourse: (state, action: PayloadAction<TCourse>) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload
    },
  },
})

export const { setCourse } = course.actions

export const courseReduces = course.reducer
