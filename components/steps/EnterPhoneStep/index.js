import clsx from 'clsx';
import React from 'react';
import NumberFormat from 'react-number-format';
import {WhiteBlock} from '../../WhiteBlock';
import {Button} from '../../Button';
import {StepInfo} from '../../StepInfo';

import styles from './EnterPhoneStep.module.scss';

export const EnterPhoneStep = () => {
    const [inputValue, setInputValue] = React.useState({});
  
    const nextDisabled = inputValue.formattedValue || inputValue.formattedValue?.includes('_');

    return (
        <div className={styles.block}>
            <StepInfo 
                icon="static/phone.png"
                title="Enter yout phone #"
                description="We will send you  a confirmation code"
            />
            <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
                <div className={clsx('mb-30', styles.input)}>
                    <img src="/static/russian-flag.png" alt = "flag" width={24} />
                    <NumberFormat 
                        className ="field"
                        format = "+# (###)-###-##-##"
                        mask= "_"
                        placeholder="+7 (999) 333-22-11"
                        value={inputValue.value}
                        onValueChange = {(values) => setInputValue(values)}
                    />
                </div>
                <Button disabled={nextDisabled=false}>
                    Next
                    <img className= "d-ib ml-10"  src="static/arrow.svg"/>
                 </Button>
            </ WhiteBlock>
        </div>
    )
}