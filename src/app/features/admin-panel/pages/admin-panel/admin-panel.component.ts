import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  standalone: false,
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
   menuItems = [
    {
      label: 'Dashboard',
      icon: 'uil-dashboard',
      open: false,
      href: 'admin/dashboard',
      subItems: [
        { label: 'Resumen general', href: 'admin/dashboard/resumen' },
        { label: 'Gráficos de rendimiento', href: 'admin/dashboard/graficos' },
        { label: 'Alertas y notificaciones', href: 'admin/dashboard/alertas' },
        { label: 'Últimas actividades', href: 'admin/dashboard/actividades' }
      ]
    },
    {
      label: 'Usuarios',
      icon: 'uil-users-alt',
      open: false,
      href: 'admin/usuarios',
      subItems: [
        { label: 'Gestionar usuarios', href: 'admin/usuarios/gestionar' },
        { label: 'Roles y permisos', href: 'admin/usuarios/roles' },
        { label: 'Autenticación', href: 'admin/usuarios/autenticacion' },
        { label: 'Actividades de usuario', href: 'admin/usuarios/actividades' }
      ]
    },
    {
      label: 'Configuraciones',
      icon: 'uil-cog',
      open: false,
      href: 'admin/configuraciones',
      subItems: [
        { label: 'Configuración general', href: 'admin/configuraciones/general' },
        { label: 'Idioma y región', href: 'admin/configuraciones/idioma' },
        { label: 'Notificaciones', href: 'admin/configuraciones/notificaciones' },
        { label: 'Apariencia', href: 'admin/configuraciones/apariencia' }
      ]
    },
    {
      label: 'Productos',
      icon: 'uil-box',
      open: false,
      href: 'admin/productos',
      subItems: [
        { label: 'Gestionar productos', href: 'admin/productos/gestionar' },
        { label: 'Categorías de productos', href: 'admin/productos/categorias' },
        { label: 'Inventario', href: 'admin/productos/inventario' },
        { label: 'Precios', href: 'admin/productos/precios' },
        { label: 'Imágenes de productos', href: 'admin/productos/imagenes' }
      ]
    },
    {
      label: 'Ventas',
      icon: 'uil-dollar-sign',
      open: false,
      href: 'admin/ventas',
      subItems: [
        { label: 'Órdenes', href: 'admin/ventas/ordenes' },
        { label: 'Estado de pagos', href: 'admin/ventas/pagos' },
        { label: 'Historial de ventas', href: 'admin/ventas/historial' },
        { label: 'Reportes de ventas', href: 'admin/ventas/reportes' }
      ]
    },
    {
      label: 'Promociones',
      icon: 'uil-tag',
      open: false,
      href: 'admin/promociones',
      subItems: [
        { label: 'Crear promociones', href: 'admin/promociones/crear' },
        { label: 'Gestionar campañas promocionales', href: 'admin/promociones/campanas' },
        { label: 'Configurar descuentos por volumen', href: 'admin/promociones/descuentos' },
        { label: 'Análisis de promociones', href: 'admin/promociones/analisis' }
      ]
    },
    {
      label: 'Reportes',
      icon: 'uil-chart-line',
      open: false,
      href: 'admin/reportes',
      subItems: [
        { label: 'Ventas', href: 'admin/reportes/ventas' },
        { label: 'Usuarios', href: 'admin/reportes/usuarios' },
        { label: 'Desempeño del sitio', href: 'admin/reportes/desempeno' },
        { label: 'Finanzas', href: 'admin/reportes/finanzas' }
      ]
    },
    {
      label: 'Seguridad',
      icon: 'uil-shield-check',
      open: false,
      href: 'admin/seguridad',
      subItems: [
        { label: 'Control de acceso', href: 'admin/seguridad/acceso' },
        { label: 'Firewall y protección', href: 'admin/seguridad/firewall' },
        { label: 'Historial de seguridad', href: 'admin/seguridad/historial' }
      ]
    },
    {
      label: 'Marketing',
      icon: 'uil-bullhorn',
      open: false,
      href: 'admin/marketing',
      subItems: [
        { label: 'Campañas', href: 'admin/marketing/campanas' },
        { label: 'SEO', href: 'admin/marketing/seo' },
        { label: 'Redes sociales', href: 'admin/marketing/redes' }
      ]
    },
    {
      label: 'Sistema',
      icon: 'uil-cogs',
      open: false,
      href: 'admin/sistema',
      subItems: [
        { label: 'Logs del sistema', href: 'admin/sistema/logs' },
        { label: 'Mantenimiento', href: 'admin/sistema/mantenimiento' },
        { label: 'Integraciones', href: 'admin/sistema/integraciones' },
        { label: 'Monitoreo del rendimiento', href: 'admin/sistema/monitoreo' }
      ]
    },
    {
      label: 'Soporte',
      icon: 'uil-headset',
      open: false,
      href: 'admin/soporte',
      subItems: [
        { label: 'Tickets de soporte', href: 'admin/soporte/tickets' },
        { label: 'FAQ', href: 'admin/soporte/faq' },
        { label: 'Chat en vivo', href: 'admin/soporte/chat' }
      ]
    },
    {
      label: 'Facturación',
      icon: 'uil-credit-card',
      open: false,
      href: 'admin/facturacion',
      subItems: [
        { label: 'Planes y suscripciones', href: 'admin/facturacion/planes' },
        { label: 'Facturas', href: 'admin/facturacion/facturas' },
        { label: 'Métodos de pago', href: 'admin/facturacion/metodos' }
      ]
    }
  ];
  
}
