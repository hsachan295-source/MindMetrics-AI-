import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { FolderOpen, Sparkles } from 'lucide-react';

export default function EmptyState({ 
  title = 'No Assessment Logs Found',
  description = 'Start your first student mental health evaluation to generate ML predictions and analytical history.',
  actionText = 'Start New Assessment',
  onAction
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-[12px] p-12 text-center flex flex-col items-center justify-center max-w-xl mx-auto my-8 space-y-4 border border-slate-800"
    >
      <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-1">
        <FolderOpen className="w-10 h-10" />
      </div>

      <h3 className="text-xl font-bold font-heading text-white">{title}</h3>
      <p className="text-sm text-slate-400 font-sans max-w-md leading-relaxed">{description}</p>

      {onAction && (
        <div className="pt-3">
          <Button variant="primary" onClick={onAction} icon={Sparkles}>
            {actionText}
          </Button>
        </div>
      )}
    </motion.div>
  );
}
