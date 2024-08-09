useEffect(() => {
    async function fetchTasks() {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data);
    }
  
    fetchTasks();
  }, []);
  