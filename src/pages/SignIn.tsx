import {SubmitHandler, useForm} from "react-hook-form";
import {signIn} from "../utils/utils.ts";
import {SignInModel} from "../models/SignInModel.ts";
import {Link} from "@mui/material";
import {ReactElement} from "react";

export default function SignIn(): ReactElement {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<SignInModel>()

    const onSubmit: SubmitHandler<SignInModel> = async (data: SignInModel) => {
        try {
            await signIn(data);
            window.location.href = '/channels';
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                // Handle invalid credentials error
                console.error("Invalid credentials. Please try again.");
            } else {
                console.error(error);
            }
        }
    }

    return (
        <div className="sign-in">
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username
                    <input {...register("username", {required: true})} />
                    {errors.username && <span>This field is required</span>}
                </label>

                <label>Password
                    <input type="password" {...register("password", {required: true})} />
                    {errors.password && <span>This field is required</span>}
                </label>

                <button type="submit">Sign In</button>
            </form>

            <p>Don't have an account? <Link href="/signup">Create one</Link></p>
        </div>
    )
}