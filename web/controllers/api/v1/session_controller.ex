defmodule PhoenixTrello.SessionController do
  use PhoenixTrello.Web, :controller

  # ...

  def unauthenticated(conn, _params) do
    conn
    |> put_status(:forbidden)
    |> render(PhoenixTrello.SessionView, "forbidden.json", error: "Not Authenticated")
  end
end
