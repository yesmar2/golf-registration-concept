import React, { Component } from "react";
import { Switch } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";
import History from "components/History/History";
import FormSteps from "components/FormSteps/FormSteps";
import FormWrapper from "components/FormWrapper/FormWrapper";

import "./AnimatedWizard.css";

class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevPage: this.props.location.state.prevPage,
            currentStep: this.props.location.state.currentStep,
            animatedLeaveValue: 1
        };

        this.goToPrevPage = this.goToPrevPage.bind(this);
        this.goToNextPage = this.goToNextPage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.state) {
            if (
                this.props.location.state.currentStep <
                nextProps.location.state.currentStep
            ) {
                this.setState({
                    animatedLeaveValue: 1
                });
            } else {
                this.setState({
                    animatedLeaveValue: -1
                });
            }

            this.setState({
                prevPage: this.props.location.state.currentStep,
                currentStep: nextProps.location.state.currentStep
            });
        }
    }

    goToPrevPage() {
        this.setState({
            animatedLeaveValue: -1
        });

        setTimeout(
            () =>
                History.push({
                    pathname: this.props.location.pathname,
                    state: {
                        currentStep: this.state.currentStep - 1,
                        prevPage: this.state.currentStep
                    }
                }),
            1
        );
    }

    goToNextPage() {
        this.setState({
            animatedLeaveValue: 1
        });

        setTimeout(
            () =>
                History.push({
                    pathname: this.props.location.pathname,
                    state: {
                        currentStep: this.state.currentStep + 1,
                        prevPage: this.state.currentStep
                    }
                }),
            1
        );
    }

    render() {
        const { forms, location, onSubmit, formId } = this.props;

        return (
            <TransitionGroup component="div" className="wizard-wrapper">
                <AnimatedWizard
                    key={location.key}
                    location={location}
                    forms={forms}
                    formId={formId}
                    goToPrevPage={this.goToPrevPage}
                    goToNextPage={this.goToNextPage}
                    prevPage={this.state.prevPage}
                    currentStep={this.state.currentStep}
                    animatedLeaveValue={this.state.animatedLeaveValue}
                    onSubmit={onSubmit}
                />
            </TransitionGroup>
        );
    }
}

class AnimatedWizard extends Switch {
    constructor(props) {
        super(props);

        if (this.props.prevPage < this.props.currentStep) {
            this.animatedValue = -1;
        } else {
            this.animatedValue = 1;
        }

        this.state = {
            animate: new Animated.Value(this.animatedValue),
            animatedLeaveValue: 1,
            position: "static"
        };
    }

    componentWillAppear(cb) {
        this.state.animate.setValue(0);
        cb();
    }

    componentWillEnter(cb) {
        this.setState({ position: "absolute" });

        Animated.spring(this.state.animate, { toValue: 0, tension: 3 }).start(
            () => this.setState({ position: "static" })
        );

        cb();
    }

    componentWillLeave(cb) {
        this.setState({ position: "absolute" });

        Animated.spring(this.state.animate, {
            toValue: this.state.animatedLeaveValue,
            tension: 3
        }).start(() => this.setState({ position: "static" }));

        setTimeout(() => cb(), 1000);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            animatedLeaveValue: nextProps.animatedLeaveValue
        });
    }

    submitForm() {
        alert("worked");
    }

    render() {
        const {
            forms,
            goToNextPage,
            goToPrevPage,
            onSubmit,
            formId
        } = this.props;
        const currentStep = this.props.currentStep;

        const style = {
            transform: Animated.template`
				translate(${this.state.animate.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: ["800px", "0px", "-800px"]
                })}, 0px)
			`,
            position: this.state.position
        };
        return (
            <Animated.div style={style} className="animated-wizard-wrapper">
                {super.render()}
                {forms.length > 1 && (
                    <FormSteps forms={forms} currentStep={currentStep} />
                )}

                {forms.map(
                    (form, index) =>
                        currentStep === index + 1 && (
                            <FormWrapper
                                key={index}
                                onSubmit={
                                    currentStep === forms.length
                                        ? onSubmit
                                        : goToNextPage
                                }
                                formComponent={form.formComponent}
                                formTitle={form.formTitle}
                                formId={formId}
                                buttonTitle={
                                    currentStep === forms.length
                                        ? "Submit"
                                        : "Continue"
                                }
                                goToPrevPage={
                                    currentStep !== 1 ? goToPrevPage : ""
                                }
                            />
                        )
                )}
            </Animated.div>
        );
    }
}

export default Wizard;
