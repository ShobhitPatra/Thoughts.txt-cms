const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
    bg-gradient-to-r from-indigo-900 from-10% via-sky-900 via-30% to-emerald-900 to-90%
    p-10 flex justify-center items-center h-screen"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
