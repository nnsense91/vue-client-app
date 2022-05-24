<template>
  <div class="add-client">
    <form
      class="add-client__form"
      @submit.prevent="
        addNewClient({ name: nameValue, lastName: lastNameValue })
      "
    >
      <div class="add-client__data">
        <label class="add-client__label">
          <input
            v-model="nameValue"
            class="add-client__input"
            placeholder="Имя"
            type="text"
          />
        </label>
        <label class="add-client__label">
          <input
            v-model="lastNameValue"
            class="add-client__input"
            placeholder="Фамилия"
            type="text"
          />
        </label>
      </div>
      <div class="add-client__controls">
        <app-button>Принять</app-button>
        <app-button @click="closeAddDialog">Отменить</app-button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, toRefs } from "vue";
import { IClientModel } from "@/store/modules/clients";

interface IAddClientProps {
  closeAddDialog: () => void;
  addNewClient: (client: Omit<IClientModel, "id">) => void;
}

const props = defineProps<IAddClientProps>();
const { closeAddDialog, addNewClient } = toRefs(props);
const nameValue = ref("");
const lastNameValue = ref("");
</script>

<style lang="scss" scoped>
.add-client {
  &__data {
    display: flex;
    flex-direction: column;
  }
  &__label {
    width: 100%;
    &:not(:first-child) {
      margin-top: 0.5rem;
    }
  }
  &__input {
    width: 100%;
    padding: 0.5rem;
  }
  &__controls {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
}
</style>
