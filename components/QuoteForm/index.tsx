'use client'
import { StatesList } from '@/utils/states-list'
import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const QuoteForm = () => {
    const [user, setUser] = useState([{
        fullName: "",
        phoneNumber: "",
        yearOfPrd: "",
        carBrand: "",
        zipCodeOrigin: "",
        zipCodeDest: "",
        email: "",
        carModel: "",
    }]);
    const submitHandler = () => {
        axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/api/quote`, user)
            .then((res) => {
                console.log(res)
                toast.success("Submit Successfully");
            })
            .catch((err) => {
                toast.error('something went wrong');
            });
        setTimeout(function () {
            window.location.reload();
        }, 3000);
    };

    const handleChange = (e: any) => setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }))


    return (
        <div className='bg-gray-rp lg:w-3/4 w-full lg:mx-0 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-x-10 p-8'>
            <Toaster
                position="bottom-left"
                reverseOrder={true}
                toastOptions={{
                    duration: 2000,
                }}
            />
            <div className='flex flex-col justify-start items-start gap-y-1 my-3'>
                <h3 className='text-white text-2xl font-semibold'>Full Name *</h3>
                <input onChange={(e) => {
                    handleChange(e)
                }} type="text" name='fullName' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='Kevin' />
            </div>
            <div className='flex flex-col justify-start items-start gap-y-1 my-3'>
                <h3 className='text-white text-2xl font-semibold'>Email (Optional)</h3>
                <input onChange={(e) => {
                    handleChange(e)
                }} type="text" name='email' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='sample@test.com' />
            </div>
            <div className='flex flex-col justify-start items-start gap-y-1 my-3'>
                <h3 className='text-white text-2xl font-semibold'>Phone *</h3>
                <input onChange={(e) => {
                    handleChange(e)
                }} type="text" name='phoneNumber' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='(212) 456 - 7890' />
            </div>
            <div className='flex flex-col justify-start items-start gap-y-1 my-3'>
                        <h3 className='text-white text-2xl font-semibold'>Your Zip Code</h3>
                        <input type="text" onChange={(e) => {
                            handleChange(e)
                        }} name='zipCodeOrigin' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='Origin - 993351' />
                        <input type="text" onChange={(e) => {
                            handleChange(e)
                        }} name='zipCodeDest' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='Destination - 993351' />
                    </div>
            <div className='flex flex-col justify-start items-start gap-y-1 my-3'>
                <h3 className='text-white text-2xl font-semibold'>Car Brand *</h3>
                <input type="text" onChange={(e) => {
                    handleChange(e)
                }} name='carBrand' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='BMW' />
            </div>
            <div className='flex flex-col justify-start items-start gap-y-1 my-3'>
                <h3 className='text-white text-2xl font-semibold'>Car Model *</h3>
                <input onChange={(e) => {
                    handleChange(e)
                }} type="text" name='carModel' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='530i' />
            </div>
            <div className='flex flex-col justify-start items-start gap-y-1 my-3'>
                <h3 className='text-white text-2xl font-semibold'>Year *</h3>
                <input onChange={(e) => {
                    handleChange(e)
                }} type="text" name='yearOfPrd' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='2017' />
            </div>
            <div className='w-full flex justify-end items-end pb-3'>
                <button onClick={() => {
                    submitHandler()
                }} className='bg-blue-rp w-full py-2 rounded-lg'>Submit Request</button>
            </div>
        </div>
    )
}

export default QuoteForm
