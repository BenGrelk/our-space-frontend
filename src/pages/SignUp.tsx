import {ReactElement} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {SignInModel} from "../models/SignInModel.ts";
import {CreateUserModel} from "../models/CreateUserModel.ts";
import {signUp} from "../utils/utils.ts";

export default function SignUp(): ReactElement {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<CreateUserModel>()

    const onSubmit: SubmitHandler<CreateUserModel> = async (data: CreateUserModel) => {
        try {
            console.log(data);
            await signUp(data);
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
        <div className="sign-up">
            <h1>Sign Up</h1>


            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username
                    <input {...register("username", {required: true})} />
                    {errors.username && <span>This field is required</span>}
                </label>

                <label>Password
                    <input type="password" {...register("password", {required: true})} />
                    {errors.password && <span>This field is required</span>}
                </label>

                <input hidden {...register("displayName")} />

                <label>Status
                    <input {...register("status")} />
                </label>

                <label>Description
                    <input {...register("description")} />
                </label>

                <input {...register("settings")} hidden/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}