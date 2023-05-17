import React from 'react';
import GenericBlock from '../generic-components/GenericBlock';
import icon from '../../images/weather-icon.png';

const Tomorrow: React.FC = () => {
  return (
    <div>
      <GenericBlock
        text1="Tomorrow"
        icon={icon}
        text2="15°C"
        onClick={() => console.log('Button clicked')}
      />
    </div>
  );
};

export default Tomorrow;

/*import React from 'react';
import GenericBlock from '../generic-components/GenericBlock';
import icon from '../../images/weather-icon.png';

function Tomorrow() {
  return (
    <div>
      <GenericBlock
        text1="Tomorrow"
        icon={icon}
        text2="15°C"
        onClick={() => console.log('Button clicked')}
      />
    </div>
  );
}

export default Tomorrow;*/
