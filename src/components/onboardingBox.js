import React from 'react';

import _ from 'lodash';
import { T, t } from '../i18n';

const OnboardingBox = React.createClass({

    render () {
        const publicKey = this.props.publicKey;

        return (
            <div className='fbtrex--onboarding'>

                <div className='fbtrex--onboarding-box'>

                    <T tag='h1' msg='onboardingTitle' />

                    <p className="fbtrex--opt-in">
                        {t('infoDietDesc')}
                        <a href="https://facebook.tracking.exposed/privacy-statement" target="_blank">privacy statement</a>
                        .
                    </p>

                    <div className="clickable">
                        <span className='default-opt-out' id='info-diet-button'>
                            {t('infoDietButton')}
                        </span>
                        <input type="checkbox" id="info-diet-checkbox" />
                    </div>

                    <p className="fbtrex--opt-in">
                        {t('dataReuseDesc')}
                        <a href="https://facebook.tracking.exposed/data" target="_blank">documented and transparent</a>
                        .
                    </p>

                    <div className="clickable">
                        <span className='default-opt-out' id='data-reuse-button'>
                            {t('dataReuseButton')}
                            <br/>
                            {t('dataReuseButton2')}
                        </span>
                        <input type="checkbox" id="data-reuse-checkbox" />
                    </div>


                    <h2 className="fbtrex--next" id="cc">{t('closeAndContinue')}→</h2>
                    <h2 className="fbtrex--next fbtrex--info" id="ccDesc">{t('optInAtLeast')}</h2>

                </div>

                <div className='fbtrex--onboarding-collapsed fbtrex--hide'>
                    {t('onboardingReduced')} <button className='fbtrex--onboarding-toggle'>{t('onboardingReopen')}</button>
                </div>

            </div>
        );
    }

});

export default OnboardingBox;
