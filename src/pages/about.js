import React from 'react';
import Figure from 'react-bootstrap/Figure'

import './page.css'
const About = () => {
    return (
        <><div><h1 className="background">Background</h1></div><div className="row no-gutters">
            <div className="col-sm-3">
                <Figure>
                    <Figure.Image src="https://prod-qna-question-images.s3.amazonaws.com/qna-images/question/2b910e09-d07b-48b1-888a-1cfc810938be/958e02a9-0bab-4c36-8aac-b82225a046a2/yqv58gl_processed.png" />
                </Figure>
            </div>
            <div className="col">
                <p id="descript">
                    This solver uses the McCabe-Thiele graphical method to determine the number of stages a binary distillation needs in order to achieve the desired distillate composition.
                    The solver also determines the optimal feed stage and minimum reflux ratio. 
                    This solver assumes constant molal in order to simplify the problem. 
                    Feel free to use this solver to save yourself time on homework problems in which it requires this graphically iterative process.
                </p>
            </div>


        </div></>
    )
}

export default About;