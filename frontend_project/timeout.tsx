useEffect(() => {
    const interval = setInterval(() => {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.duration && task.duration < Date.now()
            ? { ...task, category: 'Timeout' }
            : task
        )
      );
    }, 60000); // Check every minute
  
    return () => clearInterval(interval);
  }, []);
  