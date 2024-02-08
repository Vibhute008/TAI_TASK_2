import React from "react";
import "./style.scss";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        send("serviceId", "templateId", data, "publicKey")
            .then((response) => {
                console.log("Success", response.status, response.text);
                formSuccess;
            })
            .catch((err) => {
                console.log("Failed", err);
            });
    };

    const formSuccess = () => {
        toast("thandkls");
        document.getElementById("queryForm".reset());
    };

    return (
        <div className="query-form">
            <ToastContainer />
            <form
                onSubmit={handleSubmit(onSubmit)}
                id="queryForm"
            >
                <div className="input-field">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        {...register("from_name", {
                            required: "Name is required",
                        })}
                    />
                    {errors.from_name?.msg && (
                        <p className="errors">{errors.from_name?.msg}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="reply_to"
                        placeholder="email"
                        {...register("reply_to", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-z0-9._%]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.reply_to?.msg && (
                        <p className="errors">{errors.reply_to?.msg}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="phone_no"
                        placeholder="Phone"
                        {...register("phone_no", {
                            required: "Phone no. is required",
                            pattern: {
                                value: 8,
                                message: "Invalid Phone no.",
                            },
                        })}
                    />
                     {errors.phone_no?.msg && (
                        <p className="errors">{errors.phone_no?.msg}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        {...register("subject", {
                            required: "Phone no. is required",
                            minLength: {
                                value: 10,
                                message: "Invalid Subject",
                            },
                        })}
                    />
                     {errors.subject?.msg && (
                        <p className="errors">{errors.subject?.msg}</p>
                    )}
                </div>

                <div className="input-field full-width">
                    <textarea
                        name="message"
                        className="textarea"
                        placeholder="msg"
                        {...register("message", {
                            required: "msg is required",
                            minLength: {
                                value: 20,
                                message: "Invalid Subject",
                            },
                            maxLength: {
                                value: 500,
                                message: "hit max",
                            },
                        })}
                    >
                         {errors.message?.msg && (
                        <p className="errors">{errors.message?.msg}</p>
                    )}
                    </textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
