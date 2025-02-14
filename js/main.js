Vue.component('date-picker', {
    props: ['value'],
    template: `
        <input type="date" :value="value" @input="$emit('input', $event.target.value)" />
    `
});

Vue.component('card', {
    props: ['card', 'columnIndex', 'cardIndex'],
    template: `
        <div class="card" :class="{ completed: card.completed, overdue: card.overdue }">
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
            <p><strong>Дэдлайн:</strong> {{ card.deadline }}</p>
            <p><strong>Создано:</strong> {{ card.createdAt }}</p>
            <p><strong>Обновлено:</strong> {{ card.updatedAt }}</p>
            <date-picker v-model="card.deadline"></date-picker>
            <button @click="$emit('edit-card', columnIndex, cardIndex)">Редактировать</button>
            <button v-if="columnIndex < 3" @click="$emit('move-card', columnIndex, columnIndex + 1, cardIndex)">Переместить в следующую колонку</button>
            <button v-if="columnIndex === 2" @click="$emit('move-card', columnIndex, columnIndex - 1, cardIndex)">Вернуть в предыдущую колонку</button>
            <button v-if="columnIndex === 0 || columnIndex === 3" @click="$emit('remove-card', columnIndex, cardIndex)">Удалить</button>
            <p v-if="card.returnReason"><strong>Причина возврата:</strong> {{ card.returnReason }}</p>
        </div>
    `
});
