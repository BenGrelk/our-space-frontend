import {ReactElement} from "react";
import {useForm, SubmitHandler} from "react-hook-form"

import '../styles/CreateChannel.sass';
import {Button} from "@mui/material";
import {CreateChannelModel} from "../models/CreateChannelModel.ts";
import {createChannel, getUserId} from "../utils/utils.ts";

export default function CreateChannel(): ReactElement {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<CreateChannelModel>()
    const onSubmit: SubmitHandler<CreateChannelModel> = (data: CreateChannelModel) => {
        createChannel(data).then(() => window.location.href = '/channels');
    }

    const userId: number = getUserId();

    return (
        <div className="create-channel">
            <h1>Create Channel</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Channel Name
                    <input {...register("name", {required: true})} />
                    {errors.name && <span>This field is required</span>}
                </label>

                <label>Description
                    <input {...register("description")} />
                </label>

                <input hidden value={userId} {...register("createdByUserId", {required: true})} />
                {errors.createdByUserId && <span>This field is required</span>}

                <Button type="submit" variant="contained">
                    Create Channel
                </Button>
            </form>
        </div>
    )
}