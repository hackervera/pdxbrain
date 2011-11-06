require 'sinatra'


get "/" do
  erb :index
end

get "/networking" do
  erb :networking
end


get "/contact" do
  @header_text = "Contact Details"
  erb :contact, :layout => :dialog_layout
end

get "/about" do
  @header_text = "About me"
  erb :about, :layout => :dialog_layout
end

get "/buttons" do
  erb :buttons
end