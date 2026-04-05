<!-- ===================== js/storage.js ===================== -->
<script>
const Storage = {
  get(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  },
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};
</script>
