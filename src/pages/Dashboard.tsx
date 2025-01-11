import { Card } from '../components/ui/card'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Estadísticas */}
          <Card className="p-6 bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Estadísticas
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Total Usuarios</p>
                <p className="text-2xl font-bold text-blue-600">1,234</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Activos Hoy</p>
                <p className="text-2xl font-bold text-blue-600">123</p>
              </div>
            </div>
          </Card>

          {/* Actividad Reciente */}
          <Card className="p-6 bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Actividad Reciente
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Nuevo usuario registrado</p>
                  <p className="text-xs text-gray-500">Hace 5 minutos</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Actualización completada</p>
                  <p className="text-xs text-gray-500">Hace 15 minutos</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Tareas Pendientes */}
          <Card className="p-6 bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Tareas Pendientes
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm">Revisar reportes</p>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  Pendiente
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Actualizar documentación</p>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  En progreso
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

