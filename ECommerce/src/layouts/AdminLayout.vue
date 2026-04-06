<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <div class="brand">Admin Panel</div>
      <nav>
        <a href="#" class="nav-item">Dashboard</a>
        <a href="#" class="nav-item">Produtos</a>
        <a href="#" class="nav-item">Pedidos</a>
        <a href="#" class="nav-item">Clientes</a>
        <a href="#" class="nav-item">Relatórios</a>
      </nav>
    </aside>
    <div class="main-area">
      <header class="topbar">
        <div class="page-title">Painel Administrativo</div>
        <div class="actions">
          <button class="btn">Notificações</button>
          <button class="btn">Sair</button>
        </div>
      </header>
      <main class="content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Adminlayout',
};
</script>

<style scoped>
.admin-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
  background: #f4f6fb;
  color: #1f2937;
}

.sidebar {
  display: flex;
  flex-direction: column;
  background: #111827;
  color: #ffffff;
  padding: 24px 16px;
}

.brand {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 32px;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-item {
  color: #d1d5db;
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.main-area {
  display: flex;
  flex-direction: column;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.page-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.actions {
  display: flex;
  gap: 10px;
}

.btn {
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #111827;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
}

.content {
  flex: 1;
  padding: 24px;
}
</style>
