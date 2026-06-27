import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { motion } from 'motion/react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

//contact form service id: service_tx711ny

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        'service_tx711ny',
        'template_8kargfg',
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        'BS_GFSPqKk2FgVr3l',
      );
      toast('Message sent successfully');
      reset();
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-75 animate-pulse" />
      <div className="relative card-glow rounded-xl p-6 md:p-8 bg-background/50 backdrop-blur-sm border border-white/5">
        <motion.h2
          className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3 uppercase tracking-wider"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span
            className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          Get in Touch
        </motion.h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="name" className="text-sm font-medium text-muted-foreground ml-1">
              Name
            </label>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder="Enter your name"
              className="bg-secondary/20 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 h-11"
            />
            {errors.name && <p className="text-red-400 text-xs ml-1">{errors.name.message}</p>}
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="email" className="text-sm font-medium text-muted-foreground ml-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Enter a valid email',
                },
              })}
              placeholder="Enter your email"
              className="bg-secondary/20 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 h-11"
            />
            {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email.message}</p>}
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <label htmlFor="message" className="text-sm font-medium text-muted-foreground ml-1">
              Message
            </label>
            <Textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              placeholder="Write your message..."
              rows={5}
              className="bg-secondary/20 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 resize-none"
            />
            {errors.message && (
              <p className="text-red-400 text-xs ml-1">{errors.message.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 font-semibold tracking-wide"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </motion.div>
          </motion.div>
        </form>
      </div>
    </motion.section>
  );
}
