defmodule PhoenixTrello.Router do
  use PhoenixTrello.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :accepts, ["json"]
  end

  # VerifyHeader: this plug just looks for the token in the Authorization header.
  # VerifyHeader: this plug just looks for the token in the Authorization header.

  pipeline :api do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyHeader
    plug Guardian.Plug.LoadResource
  end

  scope "/api", PhoenixTrello do
    pipe_through :api

    scope "/v1" do
      post "/registrations", RegistrationController, :create

      get "/current_user", CurrentUserController, :show

      post "/sessions", SessionController, :create
      delete "/sessions", SessionController, :delete
    end
  end

  scope "/", PhoenixTrello do
    pipe_through :browser # Use the default browser stack

    get "/*path", PageController, :index
  end
end
