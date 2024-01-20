import React, { FC } from 'react'

interface HeaderButtonProps {
  text: string
  url: string
}

const HeaderButton: FC<HeaderButtonProps> = ({ text, url }) => {
  return (
    <a href={url} className="text-white hover:text-[#51CFDB]">
      {text}
    </a>
  )
}

export default HeaderButton
