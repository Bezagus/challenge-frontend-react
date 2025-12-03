const Loading = () => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-muted-foreground text-lg font-medium">
        Loading characters...
      </p>
    </div>
  );
};

export default Loading;
