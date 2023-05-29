// variants: info, success, danger

const MessageBox = ({
  variant = 'info',
  text,
}: {
  variant?: 'info' | 'success' | 'danger';
  text: string;
}) => {
  return (
    <div
      className={`${
        variant === 'info'
          ? 'bg-highlight/50'
          : variant === 'success'
          ? 'bg-lime-500/50'
          : 'bg-red-700/50'
      } p-4 text-center text-lg font-bold tracking-wider mt-10 rounded`}
    >
      {text}
    </div>
  );
};

export default MessageBox;
