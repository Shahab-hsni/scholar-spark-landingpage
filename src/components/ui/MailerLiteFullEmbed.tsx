import React, { useState } from "react";
import { GradientButton } from "./GradientButton";

export function MailerliteFullEmbed() {
    const [successMessage, setSuccessMessage] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setSuccessMessage("Added to the waitlist!");
                form.reset();
            } else {
                setSuccessMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setSuccessMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div
            className="relative w-full flex flex-col items-center"
        >
            <h2
                className="md:text-3xl font-bold mb-6"
            >
                Join Our Waitlist
            </h2>
            <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/1253564/forms/142182093423641699/subscribe"
                method="post"
                onSubmit={handleFormSubmit}
                style={{
                    width: "100%",
                    maxWidth: "300px",
                    textAlign: "center",
                }}
            >
                <div className="flex flex-col gap-4">
                    <input
                        id="email"
                        type="email"
                        name="fields[email]"
                        placeholder="Enter your email"
                        aria-label="email"
                        aria-required="true"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <GradientButton type="submit" className="px-10 flex items-center space-x-3 mx-auto group mb-8 w-max">
                        Submit
                    </GradientButton>
                </div>
                <input type="hidden" name="ml-submit" value="1" />
            </form>
            {successMessage && (
                <p
                    style={{
                        color: "green",
                        textAlign: "center",
                    }}
                >
                    {successMessage}
                </p>
            )}
        </div>
    );
}
