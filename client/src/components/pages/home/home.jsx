import React from 'react'
import SlideShow from "../../slide-show/slide-show"
import ImageBlock from "../../image-block/image-block"
import NewsLetterForm from "../../newsletter-form/newsletter-form"
import { RoundButton, RectangleButton, SubmitButton } from "../../button/button-style"
import { TextContainer, LightTextContainer, DownloadText, EmailText } from "../../text-block/text-container-style"
import { Divider, TransparentDivider, FlexBox } from "../../utility-styles/utility-styles"
import { TextInput } from "../../input/input-style"

/**
 * Home page
 */

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.emailInput = React.createRef();
    }

    render() {
        return (
            <div>
                <SlideShow />
                <Divider />
                <TextContainer mobileFontSize="14px" animationProps={this.animationProps}>
                    <p>Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </TextContainer>

                <FlexBox direction="row" horizontal="center" styles="margin: 40px 40px 40px;">
                    <RectangleButton to="/Download" styles="margin:0;">
                        <p>Download</p>
                    </RectangleButton>
                    <DownloadText styles="margin:0; height:80px"><p>Version 0.1</p></DownloadText>
                </FlexBox>

                <NewsLetterForm/>

                <LightTextContainer styles="margin-top:0px;">
                    <p>
                        Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </LightTextContainer>
                <ImageBlock side="right" image={require("../../../images/slideshow-images/slide1.jpg")} />
                <ImageBlock side="left" image={require("../../../images/slideshow-images/slide3.jpg")} />
                <ImageBlock side="right" image={require("../../../images/slideshow-images/Slide4.jpg")} />
                <TransparentDivider height="50px"></TransparentDivider>
                <LightTextContainer>
                    <p>Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </LightTextContainer>
                <TransparentDivider height="200px"></TransparentDivider>
            </div>
        );

    }
}

//TODO MAKE EMAIL A COMPONENET, MAKE INPUT VALIDATION, 