/* Importar las funciones necesarias desde los módulos "auth-helpers-nextjs" y "next/server" */
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

/* Define una función asíncrona llamada middleware que toma una solicitud Next.js (req: NextRequest) como argumento. */
export async function middleware(req: NextRequest) {
  /* Inicialización de la respuesta Next.js: Crea una respuesta Next.js inicial utilizando NextResponse.next() y la asigna a la variable res. */
  const res = NextResponse.next();

  const publicUrls = ["/reset"];

  if (publicUrls.includes(req.nextUrl.pathname)) {
    return res;
  }

  // Verifica si la solicitud es para la ruta "/lista" o cualquier subruta de "/lista"
  /*   if (req.url.startsWith("/lista")) {
    const supabase = createMiddlewareClient({ req, res });
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // Si no hay sesión, redirige al usuario a la página de inicio de sesión
    if (!session) {
      return NextResponse.rewrite(new URL("/login", req.url));
    }
  } */

  /* OFF Version 2: permite "/" y restringe "/lista" */
  /* Creación del cliente Supabase: Utiliza la función createMiddlewareClient del paquete @supabase/auth-helpers-nextjs para crear un cliente Supabase. */
  /* Este cliente se inicializa con el objeto de solicitud (req) y la respuesta (res) de Next.js. */
  const supabase = createMiddlewareClient({ req, res });

  /* OFF Version 2: permite "/" y restringe "/lista" */
  /* Obtención de la sesión del usuario: */
  /* Utiliza el cliente Supabase para obtener la sesión actual del usuario mediante*/
  /* supabase.auth.getSession(). */
  const {
    data: { session },
  } = await supabase.auth.getSession();

  /* Version 2: permite "/" y restringe "/lista" */
  /* Verificación de la sesión: Comprueba si existe una sesión de usuario. */
  /* Si no hay una sesión, redirige al usuario a la página de inicio de sesión utilizando NextResponse.rewrite() y la URL de inicio de sesión (/login). */
  if (!session) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  /* Retorno de la respuesta: Si la sesión del usuario existe, devuelve la respuesta inicializada (res). */
  return res;
}

/* Excepciones: */
/* https://nextjs.org/docs/pages/building-your-application/routing/middleware */
export const config = {
  matcher: [
    /* "/((?!api|_next/static|_next/image|favicon.ico).*)", */
    "/dashboard",
    /* "/",
    "/reclamos", */
  ],
};
