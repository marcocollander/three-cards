'use client';

import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { updateUser } from '@/lib/actions/user.action';
import { useUploadThing } from '@/lib/uploadthing';
import { ImageUploader } from './ImageUploader';
import { toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { UpdateQuery } from 'mongoose';

// @ts-ignore
export default function UserForm({ user }) {
    const { update } = useSession();
    const [files, setFiles] = useState([]);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: user,
    });

    const { startUpload } = useUploadThing('imageUploader');

    const doSubmit = async (values: UpdateQuery<any> | undefined) => {
        let uploadedImageUrl = values?.imageUrl;

        if (files.length > 0) {
            const uploadedImages = await startUpload(files);

            if (!uploadedImages) {
                return;
            }

            uploadedImageUrl = uploadedImages[0].url;
        }

        try {
            const updatedUser = await updateUser(user._id, {
                ...values,
                imageUrl: uploadedImageUrl,
            });

            if (updatedUser) {
                await update({
                    name: updatedUser.name,
                    image: updatedUser.imageUrl,
                });
                toast.success('User Updated');
            }
        } catch (error) {
            toast.error('User Update Error!');
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(doSubmit)}
            className='md:w-full flex flex-col sm:items-center items-start'
        >
            <div className='form-control'>
                <label htmlFor='name' className='label'>
                    Name
                </label>
                <input
                    id='name'
                    type='text'
                    className='input input-bordered w-full max-w-xs'
                    placeholder='Your Full Name'
                    {...register('name', { required: true })}
                />
                {errors.name?.type === 'required' && (
                    <p role='alert' className='text-red-600 text-sm pt-2'>
                        Imię jest wymagane
                    </p>
                )}
            </div>
            <div>
                <label htmlFor='imageUrl' className='label'>
                    Profile Picture
                </label>
                <Controller
                    name='imageUrl'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <ImageUploader
                            onFieldChange={field.onChange}
                            imageUrl={field.value}
                            setFiles={setFiles}
                        />
                    )}
                />
                {errors.imageUrl?.type === 'required' && (
                    <p role='alert' className='text-red-600 text-sm pt-2'>
                        Profile Picture is required
                    </p>
                )}
            </div>

            <button
                type='submit'
                className='btn btn-primary tracking-wider text-lg'
            >
                Update
            </button>
        </form>
    );
}
