import React from 'react'

import GithubIcon from './../../assets/img/socials/github.svg'
import TwitterIcon from './../../assets/img/socials/twitter.svg'
import LinkedinIcon from './../../assets/img/socials/linkedin.svg'
import DiscordIcon from './../../assets/img/socials/discord.svg'

function SocialLinks() {
  return (
    <div className='hidden sm:flex w-72 mb-10 justify-between'>
      <img className='w-11 h-11' src={GithubIcon} />
      <img className='w-11 h-11' src={TwitterIcon} />
      <img className='w-11 h-11' src={LinkedinIcon} />
      <img className='w-11 h-11' src={DiscordIcon} />
    </div>
  )
}

export default SocialLinks