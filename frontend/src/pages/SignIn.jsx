import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router";
import { signin } from "../lib/api";
import { Bot } from "lucide-react";
import toast from "react-hot-toast";

const SignIn = () => {
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const queryClient = useQueryClient();

  const {
    mutate: signinMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: signin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      toast.success("Signed in successfully");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleSignin = (e) => {
    e.preventDefault();
    signinMutation(signinData);
  };
  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <Bot className="w-10 h-10 text-primary " />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              TalkHire
            </span>
          </div>

          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <div className="w-full mt-4">
            <form onSubmit={handleSignin}>
              <div className="space-y-3">
                {/* Email */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="someone@example.com"
                    className="input input-bordered w-full"
                    value={signinData.email}
                    onChange={(e) =>
                      setSigninData({ ...signinData, email: e.target.value })
                    }
                    required
                  />
                </div>
                {/* Password */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="input input-bordered w-full"
                    value={signinData.password}
                    onChange={(e) =>
                      setSigninData({ ...signinData, password: e.target.value })
                    }
                    required
                  />
                  <p className="text-xs opacity-70 mt-1">
                    Password must be at least 6 characters long
                  </p>
                </div>
              </div>
              <button
                className="btn mt-4 btn-primary w-full"
                type="submit"
                disabled={isPending}
              >
                {isPending ? (
                  <span className="loading loading-spinner loading-xs">
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
              <div className="text-center mt-4">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* Right Side */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/interview.png"
                alt="Language connection illustration"
                className="w-full h-full"
              />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h3 className="text-2xl ">Practice job interviews with AI</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
