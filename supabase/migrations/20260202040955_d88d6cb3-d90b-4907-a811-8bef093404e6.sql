-- Add extension column to invitados table
ALTER TABLE public.invitados
ADD COLUMN extension text NOT NULL DEFAULT 'no';