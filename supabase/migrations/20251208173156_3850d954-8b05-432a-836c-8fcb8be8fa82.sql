-- Crear tabla de invitados
CREATE TABLE public.invitados (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  lugares_asignados INTEGER NOT NULL DEFAULT 1,
  respuesta TEXT CHECK (respuesta IN ('asistire', 'no_asistire')),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.invitados ENABLE ROW LEVEL SECURITY;

-- Política para leer registros (público para que funcione sin auth)
CREATE POLICY "Cualquiera puede ver invitados" 
ON public.invitados FOR SELECT 
USING (true);

-- Política para actualizar respuesta (público)
CREATE POLICY "Cualquiera puede actualizar respuesta" 
ON public.invitados FOR UPDATE 
USING (true)
WITH CHECK (true);

-- Trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION public.update_invitados_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_invitados_timestamp
BEFORE UPDATE ON public.invitados
FOR EACH ROW
EXECUTE FUNCTION public.update_invitados_updated_at();