export const scrollToAboutUs = (ref: any, navigate: any) => {
  if (window.location.pathname === '/send-form') {
    navigate('/');
    setTimeout(() => {
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
  ref?.current?.scrollIntoView({ behavior: 'smooth' });
};

export const scrollToCleaningInfo = (ref: any, navigate: any) => {
  if (window.location.pathname === '/send-form') {
    navigate('/');
    setTimeout(() => {
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
  ref?.current?.scrollIntoView({ behavior: 'smooth' });
};
