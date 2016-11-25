package cl.telematica.android.certamen3_p2;

import android.os.AsyncTask;

/**
 * Created by franciscocabezas on 11/18/16.
 */

public class MyAsyncTaskExecutor {
    //al momento de comprobar codigo, cambiar por la ip del servidor
    public static final String  servidor = "http://10.2.200.192:3000/series";

    private static MyAsyncTaskExecutor instance;

    public static MyAsyncTaskExecutor getInstance() {
        if(instance == null) {
            instance = new MyAsyncTaskExecutor();
        }
        return instance;
    }

    public void executeMyAsynctask(final MainActivity.Listener listener, final String textToSend) {
        AsyncTask<Void, Void, String> task = new AsyncTask<Void, Void, String>() {

            @Override
            protected void onPreExecute(){

            }

            @Override
            protected String doInBackground(Void... params) {
                String resultado = new HttpServerConnection().connectToServer(servidor , textToSend, 15000);
                return resultado;
            }

            @Override
            protected void onPostExecute(String result) {
                if(result != null){
                    System.out.println(result);

                    listener.onSuccess(result);
                }
            }
        };

        task.execute();
    }

}
