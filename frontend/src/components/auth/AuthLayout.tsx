import React from 'react';
import { Workflow } from 'lucide-react';

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};

/**
 * **AuthLayout Component**
 * - Provides a structured layout for authentication pages.
 * - Includes a title, subtitle, and a children slot for forms.
 *
 */
export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
     {/* Auth Container */}
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        
        {/* Header Section */}
        <div className="text-center">

          {/* Logo/Icon */}
          <div className="flex justify-center">
          <Workflow className="w-8 h-8 text-indigo-600" />
          </div>

          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">{title}</h2>
          <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
        </div>

         {/* Authentication Form (Children Components) */}
        {children}
      </div>
    </div>
  );
}