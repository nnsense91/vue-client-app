<template>
  <div class="modify-service">
    <form
      class="modify-service__form"
      @submit.prevent="
        addNewService({
          name: nameValue,
          description: descriptionValue,
          price: priceValue,
        })
      "
    >
      <div class="modify-service__data">
        <label class="modify-service__label">
          <input
            v-focus
            v-model="nameValue"
            class="modify-service__input"
            placeholder="Название"
            type="text"
            required
          />
        </label>
        <label class="modify-service__label">
          <textarea
            v-model="descriptionValue"
            class="modify-service__input"
            placeholder="Описание"
            type="text"
          />
        </label>
        <label class="modify-service__label">
          <input
            v-model="priceValue"
            class="modify-service__input"
            placeholder="Стоимость"
            type="number"
            step="100"
            required
          />
        </label>
      </div>
      <div class="modify-service__controls">
        <app-button>Принять</app-button>
        <app-button @click="closeAddDialog">Отменить</app-button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { IServiceModel } from "@/store/modules/services";
import { defineProps, ref, toRefs } from "vue";

interface IModifyServiceProps {
  closeAddDialog: () => void;
  addNewService: (service: Omit<IServiceModel, "id">) => void;
}

const props = defineProps<IModifyServiceProps>();
const { closeAddDialog, addNewService } = toRefs(props);

const nameValue = ref("");
const descriptionValue = ref("");
const priceValue = ref(0);
</script>

<style scoped lang="scss">
.modify-service {
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
