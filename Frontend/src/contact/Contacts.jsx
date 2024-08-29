import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    alert('Thank you for contacting us!');
    reset(); // Reset form fields after submission
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-[600px] p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md outline-none"
              placeholder="Enter your full name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full px-3 py-2 border rounded-md outline-none"
              placeholder="Enter your message"
              rows="4"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
