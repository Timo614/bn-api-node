import { instanceOfRequestMethod } from "../interfaces/server/request-method.interface";
import { ResourceInterface } from "../interfaces/server/resource";
import { ArtistInterface } from "../interfaces/resources/artist.interface";

export default {
  path: "artists",

  methods: [
    instanceOfRequestMethod({
      name: "create",
      method: "POST",
      path: "",
      required: ["name", "bio"],
      requiresAuth: true
    }),

    instanceOfRequestMethod({
      name: "edit",
      method: "PUT",
      path: "",
      required: ["name", "bio"],
      requiresAuth: true
    }),

    instanceOfRequestMethod({
      name: "index",
      method: "GET",
      path: "",
      required: [],
      requiresAuth: true
    }),

    instanceOfRequestMethod({
      name: "find",
      method: "GET",
      path: "",
      required: [],
      requiresAuth: true
    }),

    instanceOfRequestMethod({
      name: "read",
      method: "GET",
      path: "/{id}",
      required: [],
      requiresAuth: true
    })
  ]
} as ResourceInterface;
