<template>
  <form @submit="handleOnSubmit">
    <div>
      <label :for="usernameId">Email:</label>
      <div>
        <input
          :id="usernameId"
          type="email"
          placeholder="Email"
          :value="username"
          @input="handleUsernameInput"
        />
      </div>
    </div>
    <div>
      <label :for="passwordId">Password:</label>
      <div>
        <input
          :id="passwordId"
          type="password"
          :value="password"
          @input="handlePasswordInput"
        />
      </div>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import useId from "@/hooks/use-id/UseId";
import useState from "@/hooks/use-state/UseState";

const usernameId = useId();
const [username, setUsername] = useState<string>("");
const handleUsernameInput = (event: Event): void => {
  setUsername((event.target as HTMLInputElement).value);
};

const passwordId = useId();
const [password, setPassword] = useState<string>("");
const handlePasswordInput = (event: Event): void => {
  setPassword((event.target as HTMLInputElement).value);
};

const handleOnSubmit = (event: Event): void => {
  console.log(`Submitting data: ${username} - ${password}`);

  event.preventDefault();
};
</script>
