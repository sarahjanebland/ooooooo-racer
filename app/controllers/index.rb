before do
  @game = Game.find(session[:game]) if session[:game]
end

get '/' do
  erb :index
end

post '/' do
  content_type :json
  player1 = Player.find_or_create_by_name(params[:form1][:name].downcase.strip)
  player2 = Player.find_or_create_by_name(params[:form2][:name].downcase.strip)
  
  game = Game.new(:player1_id => player1.id, :player2_id => player2.id)
  game.save!

  if game.save!
  
    session[:game] = game.id
    session[:start_time] = Time.new
    status 200
    game.to_json
  else
    status 400
  end
end


post '/game_over' do
  content_type :json
  session[:end_time] = Time.new
  elapsed_time = session[:end_time] - session[:start_time]

  if params[:winning_id] == "player1"
    @game.update_attributes(:winner => @game.player1_id, :time => elapsed_time.to_s)
  else
    @game.update_attributes(:winner => @game.player2_id, :time => elapsed_time.to_s)
  end
  puts "about to redirect"
  "/game/#{@game.url}".to_json
end

get '/game/all_stats' do
  @games = Game.all
  @players = Player.all
  erb :all_stats
end

get '/game/:url' do
  @game = Game.find_by_url(params[:url])
  @player1_name = Player.find(@game.player1_id).name
  @player2_name = Player.find(@game.player2_id).name
  @winner_name = Player.find(@game.winner).name
  @elapsed_time = @game.time
  erb :game_stats
end


