import React, { useContext } from "react";
import "./forget.css";
import { FuncContext } from "./context";
import Register from "./register";

const ForgetYourPassword = () => {
    const { toggle, Forget } = useContext(FuncContext);
    return (
        <>
            {toggle ? (
                <form>
                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <h3>Find your account</h3>
                    </div>
                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0"></p>
                    </div>
                    <div class="form-outline">
                        <label class="form-label" for="form3Example3">
                            Please enter your email or mobile number to search for your
                            account.
                        </label>
                        <div class="input-group mb-3">
                            <input
                                type="email"
                                class="form-control form-control-lg"
                                placeholder="Enter your email "
                                aria-label="Enter your email"
                                aria-describedby="basic-addon2"
                            />
                            <span class="input-group-text" id="basic-addon2">
                                @example.com
                            </span>
                        </div>
                    </div>
                    <div class="button-group">
                        <button
                            onClick={Forget}
                            type="button"
                            class="btn btn-secondary"
                            id="cancel"
                        >
                            Cancel
                        </button>
                        <button type="button" class="btn btn-primary">
                            Send email
                        </button>
                    </div>
                </form>
            ) : (
                <Register />
            )}
        </>
    );
};

export default ForgetYourPassword;
