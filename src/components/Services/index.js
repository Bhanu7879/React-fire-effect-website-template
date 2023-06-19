import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>
        {' '}
        Things to know before we finalise the cost and time{' '}
      </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>
            {' '}
            What type of prototype or MVP are you building?
          </ServicesH2>
          <ServicesP> Mobile / Web / Both </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>
            {' '}
            Which platforms would you like your Prototype to run on?{' '}
          </ServicesH2>
          <ServicesP> Apple iOS / Google Android / Both Platforms </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>
            {' '}
            Will your product be similar to an existing startup?{' '}
          </ServicesH2>
          <ServicesP>
            {' '}
            Uber / Airbnb / Tinder / LinkedIn / Markerplace / Instagram /
            Crowdfunding{' '}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>
            {' '}
            In your ideal application, will people need to login?
          </ServicesH2>
          <ServicesP> Email / Social Login / No login / Note Sure </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2> Will people need profiles?</ServicesH2>
          <ServicesP> Yes / No / Not sure </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
