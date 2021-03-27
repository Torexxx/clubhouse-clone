import {WhiteBlock} from '../../WhiteBlock';
import {Button} from '../../Button';

import styles from './WelcomeStep.module.scss'


export const WelcomeStep = () => {
    return (
        <WhiteBlock className={styles.title}>
            <h3 className = {styles.title}>
                <img className={styles.handWaveImg} src="/static/hand-wave.png" alt="Celebration" />
                Welcome to Clubhouse
            </h3>
            <p>
               text
            </p>
            <div>
                <Button>
                    Get your username
                    <img className = "d-ib ml-10" src="/static/arrow/svg"/>
                </Button>
            </div>
            <div className="link mt-15 cup d-ib">Have an invite text? Sign in</div>
        </WhiteBlock>
    )
}