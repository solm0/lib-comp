import { Jersey_15, VT323 } from "next/font/google";
import localFont from 'next/font/local'

export const jersey15 = Jersey_15({
  weight: "400",
  subsets: ['latin']
});

export const vt323 = VT323({
  weight: "400",
  subsets: ['latin']
});

export const pretendard = localFont({
  src: [
    {
      path: './pretendard.woff2',
      weight: '400',
      style: 'regular',
    },
  ],
})

export const maruburi = localFont({
  src: [
    {
      path: './maruburi-semibold.otf',
      style: 'semibold',
    },
  ]
})